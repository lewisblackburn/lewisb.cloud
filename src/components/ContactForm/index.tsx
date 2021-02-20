import Button from 'components/Button'
import {Field, Form, Formik, FormikHelpers} from 'formik'
import dynamic from 'next/dynamic'
import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'
import FormField from './components/FormField'

interface ContactFormProps {}

const Map = dynamic(() => import('../../components/Map'), {
  loading: () => <div className={'w-full h-full bg-gray-100'}></div>,
  ssr: false,
})

interface Values {
  name: string
  subject: string
  message: string
}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const handleSubmit = React.useCallback(async (values, setSubmitting) => {
    setTimeout(() => {
      window.location.href = `mailto:lewisblackburn10@gmail.com?subject=${values.subject}&body=${values.message} from ${values.name}`
      setSubmitting(false)
    }, 500)
  }, [])

  return (
    <section className="py-24">
      <div className="px-8 mx-auto sm:px-8 max-w-7xl">
        <div className="container flex flex-wrap mx-auto sm:flex-nowrap">
          <div className="relative flex items-end justify-start hidden px-10 overflow-hidden rounded-lg lg:w-2/3 md:w-1/2 sm:mr-0 md:block">
            <Map />
          </div>
          <Formik
            initialValues={{
              name: '',
              subject: '',
              message: '',
            }}
            onSubmit={(
              values: Values,
              {setSubmitting}: FormikHelpers<Values>,
            ) => {
              handleSubmit(values, setSubmitting)
            }}
          >
            {({isSubmitting, values}) => (
              <Form className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
                <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
                  Message Me
                </h2>
                <p className="mb-5 leading-relaxed text-gray-600">
                  If you have any questions, feel free to message me anytime.
                </p>
                <FormField name="name" type="text" />
                <FormField name="subject" type="text" />
                <FormField name="message" type="textarea" className="h-32" />
                <Button
                  textColor="text-white"
                  bgColor="bg-indigo-600"
                  className="justify-center py-4"
                  type="submit"
                >
                  {!isSubmitting ? <FaPaperPlane /> : 'loading'}
                </Button>

                <p className="mt-3 text-xs text-gray-500">
                  If you don't recieve an email back, be sure to check your spam
                  folder!
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
