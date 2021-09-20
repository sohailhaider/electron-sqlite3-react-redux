import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createNewEmployee } from "../../store/features/employeesSlice";

const CreateUpdateEmployee = ({ editUser }) => {
  const dispatch = useDispatch();
  const createUpdateEmployeeRecord = (data) => {
    if (editUser) {
      
    } else {
      dispatch(createNewEmployee(data));
    }
  };
  useEffect(() => {
    console.log("edituser updated", editUser);
  }, [editUser]);
  return (
    <div className="pb-4 text-center">
      <Formik
        initialValues={{ firstName: "", lastName: "", status: 1 }}
        onSubmit={(values, { setSubmitting }) => {
          createUpdateEmployeeRecord(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="firstName" name="firstName" placeholder="First Name" />
            <ErrorMessage name="firstName" component="div" />
            <Field type="lastName" name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="div" />
            <Field as="select" name="status">
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </Field>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateUpdateEmployee;
