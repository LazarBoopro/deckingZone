import { useValues } from "../../context/FormValuesContext";
import { Button } from "../components/atoms/Button.atom";
import AppCanvas from "../components/containers/AppCanvas.container";
import Form from "../components/containers/Form.container";

import "../styles/configurator.scss";

export default function Configurator({
  setPage,
}: {
  setPage: CallableFunction;
}) {
  const { values } = useValues();

  return (
    <div className="configurator">
      <article className="configurator__left">
        <AppCanvas />
      </article>
      <article className="configurator__right">
        <Form />
        <div className="submit-buttons">
          <Button
            variant="primary"
            onClick={() => {
              setPage(1);
            }}
            disabled={values.length < 0.9}
          >
            Obracun
          </Button>
          <Button variant="outline" onClick={() => {}}>
            Zakazite izlazak na teren
          </Button>
        </div>
      </article>
    </div>
  );
}
