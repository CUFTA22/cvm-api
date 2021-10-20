import addressIcon from '../../../assets/address';
import circleIcon from '../../../assets/circle';
import coursesIcon from '../../../assets/courses';
import educationIcon from '../../../assets/education';
import emailIcon from '../../../assets/email';
import experienceIcon from '../../../assets/experience';
import interestsIcon from '../../../assets/interests';
import licenceIcon from '../../../assets/licence';
import linkIcon from '../../../assets/link';
import maritalIcon from '../../../assets/marital';
import nameIcon from '../../../assets/name';
import nationalityIcon from '../../../assets/nationality';
import otherIcon from '../../../assets/other';
import phoneIcon from '../../../assets/phone';
import referenceIcon from '../../../assets/reference';
import skillsIcon from '../../../assets/skills';
import starIcon from '../../../assets/star';

const findIcon = (field, className) => {
    switch (field) {
        // Personal info
        case 'name':
            return nameIcon(className);
        case 'nationality':
            return nationalityIcon(className);
        case 'address':
            return addressIcon(className);
        case 'phone':
            return phoneIcon(className);
        case 'email':
            return emailIcon(className);
        case 'marital':
            return maritalIcon(className);
        case 'drivingLicence':
            return licenceIcon(className);
        case 'link':
            return linkIcon(className);
        case 'star':
            return starIcon(className);
        case 'circle':
            return circleIcon(className);

        // Sections
        case 'workExperience':
            return experienceIcon(className);
        case 'educationAndSkills':
            return educationIcon(className);
        case 'references':
            return referenceIcon(className);
        case 'skills':
            return skillsIcon(className);
        case 'courses':
            return coursesIcon(className);
        case 'interests':
            return interestsIcon(className);

        default:
            return otherIcon(className);
    }
};

export default findIcon;
