import { useState, useEffect } from 'react';
import '../App.css';

const CreatePentest = () => {
    const [title, setTitle] = useState('');
    const [vulnDesc, setVulnDesc] = useState('');
    const [findingDesc, setfindingDesc] = useState('');
    const [impact, setImpact] = useState('');
    const [execProbability, setExecProbability] = useState('');
    const [severity, setSeverity] = useState('');
    const [category, setCategory] = useState('');
    const [screenshots, setScreenshots] = useState([]);
    const [additionalComments, setAdditionalComments] = useState('');
    const [tags, setTags] = useState([]);
    const [assets, setAssets] = useState([]);
    const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [projects, setProjects] = useState([]);
  const [slectedProject, setSelectedProject] = useState('');
  const [pentests, setPentests] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  


    const handleSubmit = (e) => {
      e.preventDefault();
      const finding = [{ title, vulnDesc, findingDesc, impact, execProbability, severity, category, screenshots, additionalComments, tags, assets }];
      

      fetch('http://localhost:8000/admin/pentest17feb2022forbankofus/pentest/new', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(finding)
      }).then((body) => {
        console.log(JSON.stringify(finding))
      }).catch((err)=> {
        console.log(JSON.stringify(finding))
        console.log(err.message)
      })
  }
  
  
    useEffect(() => {
      async function getAllCustomers() {
        const response = await fetch("http://localhost:8000/admin/customers/all");
        const body = await response.json();
        setCustomers(body.map(({ name }) => ({ label: name, value: name })));

    
        /*const newProjectValue = projects.map((project) => (project.value))
        const responsePentest = await fetch(`http://localhost:8000/admin/pentests/${newProjectValue}/all`);
        const bodyPentest = await responsePentest.json();
        setPentests(bodyPentest.map(({ title }) => ({ label: title, value: title })));*/
      }
      getAllCustomers();
    }, []);

    async function handleCustomerSelect(e) {
      const customerSel = e.target.value;
      setSelectedCustomer(customerSel);

      const responseProject = await fetch(`http://localhost:8000/admin/projects/${selectedCustomer}/all`);
      console.log(`http://localhost:8000/admin/projects/${selectedCustomer}/all`);
      const bodyProject = await responseProject.json();
      setProjects(bodyProject.map(({ title }) => ({ label: title, value: title })))
      setIsDisabled(false)
      
      
    }

    async function handleProjectSelect(e) {
      const projSel = e.target.value;
      console.log(projSel);
      setSelectedProject(projSel);
      //const responseProject = await fetch(`http://localhost:8000/admin/projects/${selectedCustomer}/all`);
      //console.log(`http://localhost:8000/admin/projects/${e.target.value}/all`);
      //const bodyProject = await responseProject.json();
      //setProjects(bodyProject.map(({ title }) => ({ label: title, value: title })));
      
      
    }
  

    return ( 
        <div className="CreatePentest">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
            </div>
            <p>
            <label>Customer:</label>
                
                    <select disabled = {isDisabled} value = {selectedCustomer} onChange={(e) => handleCustomerSelect(e)}>
                    {customers.map((customer) => (<option key = {customer.value} value={customer.value}>{customer.value}</option>))}
                   
                    </select>
                
                <label>Project:</label>
                
                <select disabled = {isDisabled} value = {slectedProject} onChange={(e) => handleProjectSelect(e)}> 
                {projects.map((project) => (<option key = {project.value} value={project.value}>{project.value}</option>))}
                </select>
                
              </p>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Pentest</h1>
              <p className="lead text-center">
                  Create new pentest
              </p>
            <form onSubmit={handleSubmit}>
                <label>Finding Title</label>
                <input 
                    type='text'
                    placeholder='Finding title'
                    name='title'
                    className='form-control'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                  <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Vulnerability Description'
                    name='vulnDescription'
                    className='form-control'
                    value={vulnDesc}
                    onChange={(e) => setVulnDesc(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Finding Description'
                    name='findingDescription'
                    className='form-control'
                    value={findingDesc}
                    onChange={(e) => setfindingDesc(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Impact of the finding'
                    name='impact'
                    className='form-control'
                    value={impact}
                    onChange={(e) => setImpact(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Execution Probability'
                    name='execProbability'
                    className='form-control'
                    value={execProbability}
                    onChange={(e) => setExecProbability(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Severity'
                    name='severity'
                    className='form-control'
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Category'
                    name='category'
                    className='form-control'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Screenshots'
                    name='screenshots'
                    className='form-control'
                    value={screenshots}
                    onChange={(e) => setScreenshots(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='textarea'
                    placeholder='Aditional Comments'
                    name='additionalComments'
                    className='form-control'
                    value={additionalComments}
                    onChange={(e) => setAdditionalComments(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Tags'
                    name='tags'
                    className='form-control'
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Assets'
                    name='assets'
                    className='form-control'
                    value={assets}
                    onChange={(e) => setAssets(e.target.value)}
                  />
                </div>
             
            </form>
            
            </div>
          </div>
        </div>
      </div>
        
    );
};

export default CreatePentest;
