// main.js
import { Form } from './components/Form.js';
import { CompanyList } from './components/CompanyList.js';

const app = document.getElementById("registration-form");


const formComponent = new Form();
formComponent.render(app);

const companyListComponent = new CompanyList();
companyListComponent.render(app);
