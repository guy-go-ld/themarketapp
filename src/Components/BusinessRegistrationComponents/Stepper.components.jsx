import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FirstPageBusinessRegistration from './FirstPageOfBusinessRegistration/FirstPageBusinessRegistration';
import SecondPageBusinessRegistration from './SecondPageBusinessRegistration';
import ThirdPageBusinessRegistration from './ThirdPageBusinessRegistration';
import FourthPageBusinessRegistration from './FourthPageBusinessRegistration';
import Business from '../../Classes/BusinessClass';



export default function BusinessStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const [firstPageData, setFirstPageData] =  React.useState(null);
    const [secondPageData, setSecondPageData] =  React.useState(null);
    const [thirdPageData, setThirdPageData] =  React.useState(null);
    const [fourthPageData, setFourthPageData] =  React.useState(null);


    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = (data) => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        switch (activeStep) {
            case 0:
                setFirstPageData(data);
                // console.log(data);
                break;
            case 1:
                setSecondPageData(data);
                // console.log(data);
                break;
            case 2:
                setThirdPageData(data);
                // console.log(data);
                break;

            default:
                break;
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleMakeBusiness = async () =>
    {
        let b = await Business.makeBusiness(
            firstPageData[0], // Name
            firstPageData[1], // Type
            thirdPageData[0], // address
            thirdPageData.slice(1), // openingHours
            secondPageData,
        );
        console.log(b);
    }


    const steps = [
        {label: 'Basic Details',
            content: <FirstPageBusinessRegistration onNext={handleNext}/>,

        },
        {label: 'Socials',
            content: <SecondPageBusinessRegistration onNext={handleNext} onBack={handleBack}/>,
        },
        {label: 'More Details',
            content: <ThirdPageBusinessRegistration onNext={handleNext} onBack={handleBack}/>,
        },
        {label: 'Approving',
            content: <FourthPageBusinessRegistration onNext={handleNext} onBack={handleBack}/>,
        },
    ];


    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={step.label} {...stepProps}>
                            <StepLabel {...labelProps}>{step.label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed!
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    {steps[activeStep].content}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}

                        {activeStep === steps.length-1 ?
                            (<Button onClick={handleMakeBusiness}>
                            Finish
                        </Button>) : (<div></div>)}
                        {/*<Button onClick={handleNext}>*/}
                        {/*    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}*/}
                        {/*</Button>*/}
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

////////////////////////////