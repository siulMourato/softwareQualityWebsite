import { Form, Formik, Field } from 'formik';
import { Router } from 'next/router';
import * as Yup from 'yup';
import { useRouter } from 'next/dist/client/router';

function FormBecomeHost() {
  const becomeahostvalidationSchema = Yup.object({
    HostName: Yup.string()
      .min(2, 'Host name is must be 2 character or more!')
      .required('Host name is required!'),
    ShortDescriptionType: Yup.string()
      .min(2, 'Short description type must be 2 character or more!')
      .required('Detailed description type is required!'),
    DetailedDescription: Yup.string()
      .min(2, 'Detailed description must be 2 character or more!')
      .required('Detailed description is required!'),
    PricePerDay: Yup.number().typeError('Price per day should be a number')
      .required('Price per day is required!'),
    MemberName: Yup.string()
      .min(2, 'Member Name must be 2 character or more!')
      .required('Member Name is required!'),
    MemberCity: Yup.string()
      .min(2, 'Member city must be 2 character or more!')
      .required('Member city is required!'),
    MemberZipCode: Yup.string()
      .min(2, 'Member zip code must be 2 character or more!')
      .required('Member zip code is required!'),
    Number: Yup.string()
      .min(2, 'Number must be 2 character or more!')
      .required('Number is required!'),
    TaxNumber: Yup.string()
      .min(5, 'Tax number must be 2 character or more!')
      .required('Tax number required!'),
    MemberEmailAddress: Yup.string()
      .email("MemberEmailAddress should be an email address")
      .required('Member email address is equired!')

  });

  const formikInitialValuesBecomeAHost = {
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
  const router = useRouter();

  return (
    <section className="pt-6">
      <Formik
        initialValues={formikInitialValuesBecomeAHost}
        onSubmit={(values) => router.push({pathname:'/success'})}
        validationSchema={becomeahostvalidationSchema}
      >

        {(props) => (
          <Form className="w-full max-w-4xl">
            <div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Host Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="HostName" name="HostName" placeholder="HostName" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.HostName && props.touched.HostName ? (
                    <div id="ErrorHostName"className="text-red-500 text-xs italic">{props.errors.HostName}</div>
                  ) : null}    </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Short Description Type
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="ShortDescriptionType" name="ShortDescriptionType" placeholder="ShortDescriptionType" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.ShortDescriptionType && props.touched.ShortDescriptionType ? (
                    <div id="ErrorShortDescriptionType" className="text-red-500 text-xs italic">{props.errors.ShortDescriptionType}</div>
                  ) : null}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Detailed Description
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="DetailedDescription" name="DetailedDescription" placeholder="DetailedDescription" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.DetailedDescription && props.touched.DetailedDescription ? (
                    <div id="ErrorDetailedDescription" className="text-red-500 text-xs italic">{props.errors.DetailedDescription}</div>
                  ) : null}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Price Per Day
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="PricePerDay" name="PricePerDay" placeholder="PricePerDay" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.PricePerDay && props.touched.PricePerDay ? (
                    <div id="ErrorPricePerDay" className="text-red-500 text-xs italic">{props.errors.PricePerDay}</div>
                  ) : null}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Member Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="MemberName" name="MemberName" placeholder="MemberName" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.MemberName && props.touched.MemberName ? (
                    <div id="ErrorMemberName" className="text-red-500 text-xs italic">{props.errors.MemberName}</div>
                  ) : null}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Member City
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="MemberCity" name="MemberCity" placeholder="MemberCity" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.MemberCity && props.touched.MemberCity ? (
                    <div id="ErrorMemberCity" className="text-red-500 text-xs italic">{props.errors.MemberCity}</div>
                  ) : null}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Member Zip Code
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="MemberZipCode" name="MemberZipCode" placeholder="MemberZipCode" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.MemberZipCode && props.touched.MemberZipCode ? (
                    <div id="ErrorMemberZipCode" className="text-red-500 text-xs italic">{props.errors.MemberZipCode}</div>
                  ) : null}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Member Address Number
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="Number" name="Number" placeholder="Number" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.Number && props.touched.Number ? (
                    <div id="ErrorNumber" className="text-red-500 text-xs italic">{props.errors.Number}</div>
                  ) : null}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Tax Number
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="TaxNumber" name="TaxNumber" placeholder="TaxNumber" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.TaxNumber && props.touched.TaxNumber ? (
                    <div id="ErrorTaxNumber" className="text-red-500 text-xs italic">{props.errors.TaxNumber}</div>
                  ) : null}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                    Email Address
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field id="MemberEmailAddress" name="MemberEmailAddress" placeholder="TaxNumber" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  {props.errors.MemberEmailAddress && props.touched.MemberEmailAddress ? (
                    <div id="ErrorMemberEmailAddress" className="text-red-500 text-xs italic">{props.errors.MemberEmailAddress}</div>
                  ) : null}
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3 text-right">
                  <button  className="shadow bg-red-400 hover:bg-red-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>

        )}

      </Formik>
    </section>
  );
}

export default FormBecomeHost;
