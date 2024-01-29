import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function accordPage() {
    const faq = [{
        "question":"this is the Question number 1?",
        "answer":"this is the answer number 1."
    },{
        "question":"this is the Question number 2?",
        "answer":"this is the answer number2."
    },{
        "question":"this is the Question number 3?",
        "answer":"this is the answer number 3."
    },{
        "question":"this is the Question number 4?",
        "answer":"this is the answer number 4."
    },{
        "question":"this is the Question number 5?",
        "answer":"this is the answer number 5."
    },{
        "question":"this is the Question number 6?",
        "answer":"this is the answer number 6."
    }]
  return (
    <div className="flex  justify-center items-center h-full">
      <main className="w-[500px] px-5">
      {

      
        faq.map((faq, index)=> 

            <div key={index}>
                <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>{faq.question}</AccordionTrigger>
    <AccordionContent>
      {faq.answer}
    </AccordionContent>
  </AccordionItem>
</Accordion>
            </div>

        )}
      
      </main>
    </div>
  )
}
