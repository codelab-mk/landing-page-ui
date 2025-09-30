import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";

const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageTitle="Policy" pageName="Policy" />
      <main className="container section-gap">
        <div style={{ padding: 10 }}>
          <h4>Политика за приватност</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <p>
              <h6>Лични податоци</h6>
              <p>Во моментов, нашата веб-страница не собира, не чува и не обработува лични податоци од посетителите.</p>
            </p>
            <p>
              <h6>Трети страни</h6>
              <p>Ако нашата веб-страница користи услуги од трети страни (на пример: Google Fonts, YouTube видеа), тие можат да собираат информации за посетителите. Ве советуваме да се запознаете со политиките за приватност на тие услуги.</p>
            </p>

            <p>
              <h6>Cookies</h6>
              <p>Нашата веб-страница не користи cookies за собирање лични податоци.</p>
            </p>

            <p>
              <h6>Контакт</h6>
              <p>
                Ако имате прашања во врска со приватноста, можете да не контактирате на{" "}
                <a href="mailto:info@codelab.mk">
                  <strong>contact@codelab.com.mk</strong>
                </a>
              </p>
            </p>
          </div>
        </div>
      </main>
    </CodeLabLayout>
  );
};
export default page;
