import React from 'react';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#3f3a3aff',
                marginBottom: '40px'
            }}>
                Assignment
            </h1>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #876b6bff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    User Card
                </h2>
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #876b6bff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    To Do List
                </h2>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;