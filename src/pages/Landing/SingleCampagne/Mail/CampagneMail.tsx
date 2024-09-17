/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FormFields from "../../../../components/Form/Form";
import useForm from "../../../../hooks/useForm";
import { campagneMail } from "../../../../assets/ts/campagne";
import {
  validateCampagneMail,
  validateCampagneMailOne,
} from "../../../../utils/validationSchema";
import useFilterCampagne from "../../../../hooks/useFilterCampagne";
import { useParams } from "react-router-dom";
import Options, { TypeOptions } from "../../../../components/Options/Options";
import useMail from "../../../../hooks/useMail";
import { Card } from "../../../../components/Card/Card";

const CampagneMail = () => {
  const formContext = useForm();
  const [initialValues, setInitialValues] = useState<Card>();
  const [options, setOptions] = useState<TypeOptions>([]);
  const [once, setOnce] = useState(true);
  const filterCampagne = useFilterCampagne();
  const { id, idMail } = useParams();
  const mailContext = useMail();

  useEffect(() => {
    if (id) {
      setOptions([
        {
          title: "1",
          url: encodeURI("/marketing/campagne/" + id + "/mail/" + id + "MAIL1"),
        },
      ]);
    }
  }, [id]);

  useEffect(() => {
    formContext?.setUrl("/campagne/mail");
    formContext?.setTitle("update");
    formContext?.setSlug("Mail");
    if (idMail && idMail?.includes("MAIL1")) {
      const currentFields = campagneMail.filter(
        (item) => item.name !== "delay"
      );
      formContext?.setFormFields(currentFields);
      formContext?.setValidate(validateCampagneMailOne);
    } else {
      formContext?.setFormFields(campagneMail);
      formContext?.setValidate(validateCampagneMail);
    }
    formContext?.setIdUpdate(id ? id : "");
  }, [id, idMail]);

  useEffect(() => {
    if (mailContext?.mails && mailContext?.mails.length > 0 && idMail && id) {
      const currentMail = filterCampagne(mailContext?.mails, idMail);
      const currentOptions = mailContext.mails
        .filter((item) => item.idData == id)
        .map((item, index) => {
          return {
            title: `${index + 1}`,
            url: encodeURI("/marketing/campagne/" + id + "/mail/" + item.id),
          };
        });

      if (currentOptions && currentOptions.length > 0 && once) {
        setOptions(currentOptions);
        setOnce(false);
      }
      setInitialValues(currentMail);
    }
  }, [id, idMail, mailContext?.mails]);

  return (
    <div className="edit-campagne-container">
      <Options options={options} type="number" />
      <FormFields
        setState={mailContext?.setMails}
        initialValues={{
          title: initialValues?.title ? initialValues.title : "",
          imgCampagne: initialValues?.imgCampagne
            ? { name: initialValues.imgCampagne }
            : null,
          delay: initialValues?.delay ? initialValues.delay : "",
          object: initialValues?.object ? initialValues.object : "",
          mailText: initialValues?.mailText ? initialValues.mailText : "",
        }}
      />
    </div>
  );
};

export default CampagneMail;
