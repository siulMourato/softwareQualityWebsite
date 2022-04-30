import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

function FormBecomeHost() {
  const BecomeAHostValidationSchema = Yup.object({
    location: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
  });

  const formikInitialValuesBecomeAHost = {
    location: '',
  };
  //TODO: this is the data that should be submitted to API
  // {
  //   "img": "https://links.papareact.com/hz2",
  //   "location": "Private room in center of London",
  //   "title": "Independant luxury studio apartment",
  //   "description": "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
  //   "star": 4.3,
  //   "price": "£40 / night",
  //   "total": "£157 total",
  //   "long": -0.095091,
  //   "lat": 51.48695
  // }
  return (
    <div className="flex justify-center w-full my-12">
      <Formik
        initialValues={formikInitialValuesBecomeAHost}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        validationSchema={BecomeAHostValidationSchema}
      >
        {(props) => (
          <Form>
            <div>
              <Field id="location" name="location" placeholder="myLocation" />
              {props.errors.location && props.touched.location ? (
                <div>{props.errors.location}</div>
              ) : null}
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormBecomeHost;
