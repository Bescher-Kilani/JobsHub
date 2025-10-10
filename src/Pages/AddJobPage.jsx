import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import{toast} from "react-toastify";


const AddJobPage = ({addJobSubmit}) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Vollzeit');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('Unter 50K€');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            company:{
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            }
        }
        addJobSubmit(newJob);
        toast.success("Job erfolgreich hinzugefügt");
        return navigate('/jobs');
    }

  return (
      <section className="bg-indigo-50">
          <div className="container m-auto max-w-2xl py-24">
              <div
                  className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
              >
                  <form onSubmit={submitForm}>
                      <h2 className="text-3xl text-center font-semibold mb-6">Job Hinzufügen</h2>

                      <div className="mb-4">
                          <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                          >Job Typ</label
                          >
                          <select
                              id="type"
                              name="type"
                              className="border rounded w-full py-2 px-3"
                              required
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                          >
                              <option value="Full-Time">Vollzeit</option>
                              <option value="Part-Time">Teilzeit</option>
                              <option value="Remote">Remote</option>
                              <option value="Internship">Praktikum</option>
                          </select>
                      </div>

                      <div className="mb-4">
                          <label className="block text-gray-700 font-bold mb-2"
                          >Job Name</label
                          >
                          <input
                              type="text"
                              id="title"
                              name="title"
                              className="border rounded w-full py-2 px-3 mb-2"
                              placeholder="z.B Frontend Developer"
                              required
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                          />
                      </div>
                      <div className="mb-4">
                          <label
                              htmlFor="description"
                              className="block text-gray-700 font-bold mb-2"
                          >Beschreibung</label
                          >
                          <textarea
                              id="description"
                              name="description"
                              className="border rounded w-full py-2 px-3"
                              rows="4"
                              placeholder="Fügen Sie alle Arbeitsaufgaben, Erwartungen, Anforderungen usw. hinzu"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                      </div>

                      <div className="mb-4">
                          <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                          >Gehalt</label
                          >
                          <select
                              id="salary"
                              name="salary"
                              className="border rounded w-full py-2 px-3"
                              required
                              value={salary}
                              onChange={(e) => setSalary(e.target.value)}
                          >
                              <option value="Unter 50.000 €">Unter 50.000 €</option>
                              <option value="50.000–60.000 €">50.000–60.000 €</option>
                              <option value="60.000–70.000 €">60.000–70.000 €</option>
                              <option value="70.000–80.000 €">70.000–80.000 €</option>
                              <option value="80.000–90.000 €">80.000–90.000 €</option>
                              <option value="90.000–100.000 €">90.000–100.000 €</option>
                              <option value="100.000–110.000 €">100.000–110.000 €</option>
                              <option value="110.000–125.000 €">110.000–125.000 €</option>
                              <option value="125.000–140.000 €">125.000–140.000 €</option>
                              <option value="140.000–160.000 €">140.000–160.000 €</option>
                              <option value="Über 160.000 €">Über 160.000 €</option>


                          </select>
                      </div>

                      <div className='mb-4'>
                          <label className='block text-gray-700 font-bold mb-2'>
                              Ort
                          </label>
                          <input
                              type='text'
                              id='location'
                              name='location'
                              className='border rounded w-full py-2 px-3 mb-2'
                              placeholder='Firmenstandort'
                              required
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                          />
                      </div>

                      <h3 className="text-2xl mb-5">Firma Info</h3>

                      <div className="mb-4">
                          <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                          >Firmenname</label
                          >
                          <input
                              type="text"
                              id="company"
                              name="company"
                              className="border rounded w-full py-2 px-3"
                              placeholder="Firmenname"
                              value={companyName}
                              onChange={(e) => setCompanyName(e.target.value)}
                          />
                      </div>

                      <div className="mb-4">
                          <label
                              htmlFor="company_description"
                              className="block text-gray-700 font-bold mb-2"
                          >Firmenbeschreibung</label
                          >
                          <textarea
                              id="company_description"
                              name="company_description"
                              className="border rounded w-full py-2 px-3"
                              rows="4"
                              placeholder="Was macht Ihre Firma?"
                              value={companyDescription}
                              onChange={(e) => setCompanyDescription(e.target.value)}
                          ></textarea>
                      </div>

                      <div className="mb-4">
                          <label
                              htmlFor="contact_email"
                              className="block text-gray-700 font-bold mb-2"
                          >Email</label
                          >
                          <input
                              type="email"
                              id="contact_email"
                              name="contact_email"
                              className="border rounded w-full py-2 px-3"
                              placeholder="Email für Bewerber"
                              required
                              value={contactEmail}
                              onChange={(e) => setContactEmail(e.target.value)}
                          />
                      </div>
                      <div className="mb-4">
                          <label
                              htmlFor="contact_phone"
                              className="block text-gray-700 font-bold mb-2"
                          >Mobilnummer</label
                          >
                          <input
                              type="tel"
                              id="contact_phone"
                              name="contact_phone"
                              className="border rounded w-full py-2 px-3"
                              placeholder="Optional Mobilnummer"
                              value={contactPhone}
                              onChange={(e) => setContactPhone(e.target.value)}
                          />
                      </div>

                      <div>
                          <button
                              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                              type="submit"
                          >
                             Job Hinzufügen
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </section>
  );
};

export default AddJobPage;
