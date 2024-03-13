import { useParams } from 'react-router-dom';
import { useGetStudentApplicationsQuery } from '@egst.frontend/shared';
import './profile.css';
import TabPanel, { Item } from 'devextreme-react/tab-panel';
import Form, { SimpleItem, Label, GroupItem } from 'devextreme-react/form';
import Student from '../../constants/student';
import Table from '../../components/table';
import { useSelector } from 'react-redux';
import { getSelectedApplication } from 'libs/shared/src/lib/state/StudentApplicationSlice';

export default function Profile() {


  // const { data: applicantsData } = useGetStudentApplicationsQuery(null);

// const applicationId = useParams();

const data = useSelector(getSelectedApplication);





console.log("selected application", data)

  const { profile } = Student;
  const { profileImage, ...otherProfiles } = profile.personal;

  const familyData = {
    head: ['Full Name', 'Relation', 'Education Level', 'Occupation', 'Mobile'],
    body: profile.familyBackground,
  };

  const educationData = {
    head: [
      'Institution',
      'Field Of Study',
      'Qualification',
      'Grade',
      'Scale',
      'Education Type',
      'From',
      'To',
    ],
    body: profile.educations,
  };

  const experienceData = {
    head: ['Company Name', 'Title', 'Location', 'Description', 'From', 'To'],
    body: profile.experiences,
  };



// console.log("app", applicantsData, applicationId.id)

// applicantsData?.filter(applicantsData => {
  
// })



  return (
    <>
      <div className='profile-container'>
        <div className='title-container'>
          <i className='fa-solid fa-user-graduate text-white'></i>
          <h3>Student Profile</h3>
        </div>
        <div className='overview-content'>
          <TabPanel id='tabPanel' swipeEnabled={false}>
            <Item title='Personal' icon='fa-solid fa-person'>
              <div className='personal col-later'>
                <div className='profile-img'>
                  <img src={profileImage} alt='profile' width={'100%'} />
                  <p>{otherProfiles.username}</p>
                </div>
                <div className='w-60 full-later'>
                  <Form
                    id='form'
                    formData={otherProfiles}
                    colCount={2}
                    // readOnly={true}
                  >
                    <GroupItem>
                      <SimpleItem dataField='firstName'></SimpleItem>
                      <SimpleItem dataField='middleName'></SimpleItem>
                      <SimpleItem dataField='lastName'></SimpleItem>
                    </GroupItem>
                    <GroupItem>
                      <SimpleItem dataField='nationality'></SimpleItem>
                      <SimpleItem dataField='region'></SimpleItem>
                      <SimpleItem dataField='city'></SimpleItem>
                    </GroupItem>
                    <GroupItem>
                      <SimpleItem dataField='disability'></SimpleItem>
                      <SimpleItem dataField='maritalStatus'></SimpleItem>
                    </GroupItem>
                    <GroupItem>
                      <SimpleItem dataField='placeOfBirth'></SimpleItem>
                      <SimpleItem dataField='dateOfBirth'></SimpleItem>
                    </GroupItem>
                  </Form>
                </div>
              </div>
            </Item>
            <Item title='Applicant' icon='user'>
              <div className='my-tab-container'>
                <Form
                  id='form'
                  formData={profile.applicant}
                  readOnly={true}
                ></Form>
              </div>
            </Item>
            <Item title='Contact Address' icon='fa-solid fa-address-book'>
              <div className='my-tab-container'>
                <Form
                  id='form'
                  formData={profile.contactAddress}
                  readOnly={true}
                ></Form>
              </div>
            </Item>
            <Item title='Emergency Contact' icon='fa-solid fa-hospital'>
              <div className='my-tab-container'>
                <Form
                  id='form'
                  formData={profile.emergencyContact}
                  readOnly={true}
                ></Form>
              </div>
            </Item>
            <Item title='Family Background' icon='fa-solid fa-users'>
              <div className='my-tab-container table-mana'>
                <div className='table-container'>
                  <Table tableData={familyData} headBackground={'#dddddd'} />
                </div>
              </div>
            </Item>
            <Item title='Education' icon='fa-solid fa-user-graduate'>
              <div className='my-tab-container'>
                <div className='table-container'>
                  <Table tableData={educationData} headBackground={'#dddddd'} />
                </div>
              </div>
            </Item>
            <Item title='Experience' icon='fa-solid fa-person-digging'>
              <div className='my-tab-container'>
                <div className='table-container'>
                  <Table
                    tableData={experienceData}
                    headBackground={'#dddddd'}
                  />
                </div>
              </div>
            </Item>
          </TabPanel>
        </div>
      </div>
    </>
  );
}
