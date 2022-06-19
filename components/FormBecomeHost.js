import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

function FormBecomeHost() {
  const BecomeAHostValidationSchema = Yup.object({
    location: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    HostName: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    ShortDescriptionType: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    DetailedDescription: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    PricePerDay: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    MemberName: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    MemberCity: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    MemberZipCode: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    Number: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    TaxNumber: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!'),
    MemberEmailAddress: Yup.string()
      .min(2, 'Must be 2 character or more!')
      .required('Required!')

  });

  const formikInitialValuesBecomeAHost = {
    location: '',
    HostName: '',
    ShortDescriptionType: '',
    DetailedDescription: '',
    PricePerDay: '',
    MemberName: '',
    MemberCity: '',
    MemberZipCode: '',
    Number: '',
    TaxNumber: '',
    MemberEmailAddress: ''
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
    <Formik
      initialValues={formikInitialValuesBecomeAHost}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      validationSchema={BecomeAHostValidationSchema}
    >
      {(props) => (
        <Form className="w-full max-w-4xl">
          <div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Host Name
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="HostName" name="HostName" placeholder="HostName" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.HostName && props.touched.HostName ? (
                  <div class="text-red-500 text-xs italic">{props.errors.HostName}</div>
                ) : null}    </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Short Description Type
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="ShortDescriptionType" name="ShortDescriptionType" placeholder="ShortDescriptionType" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.ShortDescriptionType && props.touched.ShortDescriptionType ? (
                  <div class="text-red-500 text-xs italic">{props.errors.ShortDescriptionType}</div>
                ) : null}
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Detailed Description
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="DetailedDescription" name="DetailedDescription" placeholder="DetailedDescription" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.DetailedDescription && props.touched.DetailedDescription ? (
                  <div class="text-red-500 text-xs italic">{props.errors.DetailedDescription}</div>
                ) : null}
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Price Per Day
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="PricePerDay" name="PricePerDay" placeholder="PricePerDay" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.PricePerDay && props.touched.PricePerDay ? (
                 <div class="text-red-500 text-xs italic">{props.errors.PricePerDay}</div>
                ) : null}
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Member Name
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="MemberName" name="MemberName" placeholder="MemberName" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.MemberName && props.touched.MemberName ? (
                 <div class="text-red-500 text-xs italic">{props.errors.MemberName}</div>
                ) : null}
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Member City
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="MemberCity" name="MemberCity" placeholder="MemberCity" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.MemberCity && props.touched.MemberCity ? (
                  <div class="text-red-500 text-xs italic">{props.errors.MemberCity}</div>
                ) : null}
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Member Zip Code
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="MemberZipCode" name="MemberZipCode" placeholder="MemberZipCode" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.MemberZipCode && props.touched.MemberZipCode ? (
                 <div class="text-red-500 text-xs italic">{props.errors.MemberZipCode}</div>
                ) : null}
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Member Address Number
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="Number" name="Number" placeholder="Number" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.Number && props.touched.Number ? (
                  <div class="text-red-500 text-xs italic">{props.errors.Number}</div>
                ) : null}
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Tax Number
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="TaxNumber" name="TaxNumber" placeholder="TaxNumber" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.TaxNumber && props.touched.TaxNumber ? (
                  <div class="text-red-500 text-xs italic">{props.errors.TaxNumber}</div>
                ) : null}
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                  Email Address
                </label>
              </div>
              <div class="md:w-2/3">
                <Field id="MemberEmailAddress" name="MemberEmailAddress" placeholder="TaxNumber" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {props.errors.MemberEmailAddress && props.touched.MemberEmailAddress ? (
                  <div class="text-red-500 text-xs italic">{props.errors.MemberEmailAddress}</div>
                ) : null}
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3 text-right">
                <button class="shadow bg-red-400 hover:bg-red-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormBecomeHost;
