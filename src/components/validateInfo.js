
export default function validateInfo(values) {
    let errors ={}

    if(!values.name){
        errors.name = "Polje ime je obavezno"
    }

    if (!values.email) {
        errors.email = 'Polje e-mail je obavezno';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email addresa nije dobro unesena';
      }

    if(values.message >= 10){
        errors.message ="Broj slova je ogranicen na 1000"
    }
    if(!values.message){
        errors.message ="Polje poruka je obavezno"
    }
    return errors;
}

