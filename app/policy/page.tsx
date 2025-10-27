import PageBanner from "@/components/PageBanner/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";

export const metadata = {
  title: "Политика за Приватност | CodeLab",
  description: "Политика за приватност и лични податоци.",
  keywords: ["приватност", "лични податоци"],
};

const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageTitle="Политика За Приватност" pageName="Политика За Приватност" />
      <main className="container section-gap">
        <div style={{ padding: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <div>
              <h6>Лични податоци</h6>
              <p>Во моментов, нашата веб-страница не собира, не чува и не обработува лични податоци од посетителите.</p>
            </div>

            <div>
              <h6>Трети страни</h6>
              <p>Ако нашата веб-страница користи услуги од трети страни (на пример: Google Fonts, YouTube видеа), тие можат да собираат информации за посетителите. Ве советуваме да се запознаете со политиките за приватност на тие услуги.</p>
            </div>

            <div>
              <h6>Cookies</h6>
              <p>Нашата веб-страница не користи cookies за собирање лични податоци.</p>
            </div>

            <div>
              <h6>Контакт</h6>
              <p>
                Ако имате прашања во врска со приватноста, можете да не контактирате на{" "}
                <a href="mailto:info@codelab.mk">
                  <strong>contact@codelab.com.mk</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </CodeLabLayout>
  );
};
export default page;
