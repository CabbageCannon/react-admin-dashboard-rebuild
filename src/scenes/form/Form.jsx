import { Box, Button, TextField, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import { tokens } from "../../theme";

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (<Box>
    <Header title="CREATE USER" description="Create a New User Profile" />
    <Box sx={{
      p: "20px"
    }}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* 表单内容 */}
            <Box sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4,minmax(0,1fr))",
              gap: "20px"
            }}>
              <TextField
                sx={{ gridColumn: "span 2" }}
                type="text"
                variant="filled"
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                // !!表示将对象严格转成bool值
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />
              <TextField
                sx={{ gridColumn: "span 2" }}
                type="text"
                variant="filled"
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                // !!表示将对象严格转成bool值
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
              <TextField
                sx={{ gridColumn: "span 4" }}
                type="text"
                variant="filled"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                // !!表示将对象严格转成bool值
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                sx={{ gridColumn: "span 4" }}
                type="text"
                variant="filled"
                label="Contact Number"
                name="contactNumber"
                value={values.contactNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                // !!表示将对象严格转成bool值
                error={!!touched.contactNumber && !!errors.contactNumber}
                helperText={touched.contactNumber && errors.contactNumber}
              />
              <TextField
                sx={{ gridColumn: "span 4" }}
                type="text"
                variant="filled"
                label="Address 1"
                name="address1"
                value={values.address1}
                onChange={handleChange}
                onBlur={handleBlur}
                // !!表示将对象严格转成bool值
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
              />
              <TextField
                sx={{ gridColumn: "span 4" }}
                type="text"
                variant="filled"
                label="Address2"
                name="address2"
                value={values.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                // !!表示将对象严格转成bool值
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
              />
            </Box>

            {/* 提交按钮 */}
            <Box sx={{
              display: "flex",
              justifyContent: "right",
              alignContent: "center",
              mt: "20px"
            }}>
              <Button
                type="submit"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "5px 10px 10px 5px",
                  backgroundColor: colors.greenAccent[600]
                }}>CREATE NEW USER</Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  </Box>)

  // 处理上传表单逻辑
  function handleSubmit(values) {
    console.log(values);
  }
}
// 初始values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  address1: "",
  address2: ""
}

export default Form;