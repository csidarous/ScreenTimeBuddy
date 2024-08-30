import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "How does Screen Time Buddie help monitor screen time?",
    answer: "Screen Time Buddie provides tools to track the amount of time spent on devices, allowing parents to monitor and manage screen usage effectively.",
    bgcolor: "primary.light",
  },
  {
    question: "Can I set daily screen time limits for my child?",
    answer: "Yes, Screen Time Buddie allows you to set customizable daily screen time limits, ensuring your child maintains healthy screen habits.",
    bgcolor: "secondary.light",
  },
  {
    question: "How can Screen Time Buddie improve our family's focus on real-life activities?",
    answer: "Screen Time Buddie helps you set screen-free times and encourages your family to engage in real-life interactions and activities.",
    bgcolor: "warning.light",
  },
  // Add more FAQ items here as needed
];

const Faq = () => {
  return (
    <section id="faq">
      <Box
        id="faq"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          bgcolor: '#5F9EA0',
          color: 'text.primary',
          py: 10,
          px: 2,
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#fff' }}
        >
          Frequently Asked Questions
        </Typography>

        {/* FAQ Items */}
        <Box sx={{ maxWidth: '800px', width: '100%', mt: 4 }}>
          {faqData.map((faq, index) => (
            <Accordion key={index} sx={{ bgcolor: faq.bgcolor, boxShadow: 3, mt: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#00004d' }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00004d' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </section>
  );
}

export default Faq;
