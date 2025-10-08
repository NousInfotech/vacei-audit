'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Persona = 'business' | 'firm';

interface PersonaContextType {
  persona: Persona;
  setPersona: (persona: Persona) => void;
  togglePersona: () => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider = ({ children }: { children: ReactNode }) => {
  const [persona, setPersona] = useState<Persona>('business');

  const togglePersona = () => {
    setPersona(prev => prev === 'business' ? 'firm' : 'business');
  };

  return (
    <PersonaContext.Provider value={{ persona, setPersona, togglePersona }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
};

