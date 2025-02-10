import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@*/components/ui/accordion";

// A reusable component for each service's FAQ section.
export default function FAQAccordion({ title, items }) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {items.map((item, idx) => (
          <AccordionItem key={idx} value={`${title}-item-${idx}`}>
            <AccordionTrigger className="font-medium ">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base text-primary leading-relaxed ml-2">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
