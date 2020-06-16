import React from "react";
import {Container} from "react-bootstrap";
import {LogOutButton} from "../../AdditionalComponents/LogOutBtn/LogOutButton";
import AppBar from "@material-ui/core/AppBar";
import TabPanel from "../../AdditionalComponents/TabPanel";
import DeleteAccountComponent from "../DoctorPage/DoctorPageComponents/DeleteAccountComponent";
import EditDataFormComponent from "./PatientPageComponents/EditDataFormComponent";
import PatientInfoComponent from "./PatientPageComponents/PatientInfoComponent";
import VisitRegistration from "./PatientPageComponents/VisitRegistration";
import {CustomTab, CustomTabs} from "../../AdditionalComponents/CustomTab";
import TabCustomTypography from "../../AdditionalComponents/CustomTypography/TabCustomTypography";


//CSS Stylesheet
export const styleForMainDiv = {
  margin: '30px'
};
export const styleForMainContainer = {
  marginTop: "50px"
};

export const PatientPage = (props) => {
  const {
    patientPageState,
    userInformation,
    onClickChangeTabPanel,
    fetchForChangeUserInformation,
    fetchForDeleteAccount,
  } = props;

  return(
    <div style={styleForMainDiv}>
      <div>
        <LogOutButton/>
      </div>
      <div>
        <Container style={styleForMainContainer}>
          <AppBar position="static">
            <CustomTabs
              value={patientPageState.componentToShow}
              onChange={onClickChangeTabPanel}
              variant="scrollable"
              scrollButtons="auto"
            >
              <CustomTab
                label={
                  <TabCustomTypography
                    primaryLabel={"Wizyty"}
                    secondaryLabel={"Visits"}
                  />
                }
              />
              <CustomTab
                label={
                  <TabCustomTypography
                    primaryLabel={"Rezerwowanie Wizyt"}
                    secondaryLabel={"Visit Registration"}
                  />
                }
              />
              <CustomTab
                label={
                  <TabCustomTypography
                    primaryLabel={"Informacje Użytkownika"}
                    secondaryLabel={"User Information"}
                  />
                }
              />
              <CustomTab
                label={
                  <TabCustomTypography
                    primaryLabel={"Edytowanie danych użytkownika"}
                    secondaryLabel={"Edit User Information"}
                  />
                }
              />
              <CustomTab
                label={
                  <TabCustomTypography
                    primaryLabel={"Usuwanie Konta"}
                    secondaryLabel={"Delete Account"}
                  />
                }
              />
            </CustomTabs>
          </AppBar>
          <TabPanel value={patientPageState.componentToShow} index={0}>
            {/*<VisitsComponent/>*/}
            hello
          </TabPanel>
          <TabPanel value={patientPageState.componentToShow} index={1}>
            <VisitRegistration/>
          </TabPanel>
          <TabPanel value={patientPageState.componentToShow} index={2}>
            <PatientInfoComponent
              patientInformation={patientPageState.patientInformation}
            />
          </TabPanel>
          <TabPanel value={patientPageState.componentToShow} index={3}>
            <EditDataFormComponent
              fetchRequest={fetchForChangeUserInformation}
              userInformation={userInformation}
            />
          </TabPanel>
          <TabPanel value={patientPageState.componentToShow} index={4}>
            <DeleteAccountComponent
              fetchRequest={fetchForDeleteAccount}
            />
          </TabPanel>
        </Container>
      </div>
    </div>)
};

export default PatientPage