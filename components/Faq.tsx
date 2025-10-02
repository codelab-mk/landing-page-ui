import Accordion from "react-bootstrap/Accordion";

export const Faq2 = () => {
  const faq: {
    id: number;
    question: string;
    answer: string;
  }[] = [
    {
      id: 1,
      question: "Како можам да се регистрирам?",
      answer: "Регистрацијата се врши преку пополнување формата наведена во деталите за курсот.",
    },
    {
      id: 2,
      question: "Зошто треба да се приклучам на еден од овие курсеви?",
      answer: "Курсевите ќе ви обезбедат трајни вештини во програмирањето и ќе ве подготват за успешна кариера во светот на технологијата. Се надаме дека ги задоволивме вашите очекувања. Приклучете ни се и заедно да градиме нови програмски приказни!",
    },
    {
      id: 3,
      question: "Дали курсевите вклучуваат тимска соработка или проекти?",
      answer: "Да, имаме идеи за тимска соработка и проекти што ги вклучуваат учесниците во креативната програмска заедница.",
    },
    {
      id: 4,
      question: "Дали курсевите нудат можност за продолжено учење или развој на специфични вештини?",
      answer: "Да, по завршување на основниот курс, учесниците имаат можност за продолжено учење преку напредни курсеви и специфични области на програмирањето.",
    },
    {
      id: 5,
      question: "Дали има предуслови за учество?",
      answer: "Не, курсевите се отворени за сите. Не се потребни претходни знаења за програмирање.",
    },
  ];

  return (
    <section className="ed-faq ed-faq--style2 section-gap position-relative">
      <div className="container ed-container">
        <div className="ed-faq__inner position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="ed-section-head text-center">
                <h3 className="ed-section-head__title ed-split-text left">Често поставувани прашања</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="ed-faq__content">
                <Accordion className="ed-faq__accordion faq-inner accordion" defaultActiveKey="1">
                  {faq.map((item) => (
                    <Accordion.Item eventKey={item.id.toString()} key={item.id} className="ed-faq__accordion-item">
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body className="ed-faq__accordion-body">
                        <p className="ed-faq__accordion-text">{item.answer}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
