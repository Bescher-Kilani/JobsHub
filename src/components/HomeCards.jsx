import React from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';

const HomeCards = () => {
  return (
      <section className="py-4">
          <div className="container-xl lg:container m-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                  <Card>
                      <h2 className="text-2xl font-bold">Für Entwickler</h2>
                      <p className="mt-2 mb-4">
                          Durchsuche unsere React-Jobs und starte noch heute deine Karriere

                      </p>
                      <Link
                          to="/jobs"
                          className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                      >
                          Jobs Durchsuchen
                      </Link>
                  </Card>
                  <Card bg="bg-indigo-100">
                      <h2 className="text-2xl font-bold">Für Arbeitgeber</h2>
                      <p className="mt-2 mb-4">
                          Veröffentliche deinen Job und finde den idealen React-Entwickler für dein Team
                      </p>
                      <Link
                          to="/add-job"
                          className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                      >
                          Job Hinzufügen
                      </Link>
                  </Card>
              </div>
          </div>
      </section>
  );
};

export default HomeCards;
