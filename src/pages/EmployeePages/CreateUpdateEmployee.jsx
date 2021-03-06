import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import {
  createNewEmployee,
  updateEmployee,
} from "../../store/features/employeesSlice";
import EmployeeSchema from "./ValidationSchema";

const CreateUpdateEmployee = ({ editUser, setEditUser }) => {
  const dispatch = useDispatch();
  const formikRef = useRef();
  const createUpdateEmployeeRecord = (data) => {
    if (editUser) {
      dispatch(updateEmployee({ ...data, id: editUser.id }));
      setValues(null);
    } else {
      dispatch(createNewEmployee(data));
      setValues(null);
    }
  };
  const setValues = (_editUser) => {
    setEditUser(_editUser);
    if (_editUser) {
      formikRef.current.setFieldValue("firstName", _editUser.firstName);
      formikRef.current.setFieldValue("lastName", _editUser.lastName);
      formikRef.current.setFieldValue("status", _editUser.status);
    } else {
      formikRef.current.resetForm();
      // formikRef.current.setFieldValue("firstName", "");
      // formikRef.current.setFieldValue("lastName", "");
      // formikRef.current.setFieldValue("status", 1);
    }
  };
  useEffect(() => {
    if (formikRef.current && editUser) {
      setValues(editUser);
    }
  }, [editUser]);
  return (
    <div className="pb-4 text-center">
      <Formik
        innerRef={formikRef}
        validationSchema={EmployeeSchema}
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
            <Button
              onClick={() => setValues(null)}
              disabled={isSubmitting}
              variant="secondary"
            >
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateUpdateEmployee;
