import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'ดูKimetsu no Yiba the movie', completed: true },
        { id: 2, text: 'ดูถังซานภาคแรก', completed: true },
        { id: 3, text: 'ดูถังซานภาคสอง', completed: false },
        { id: 4, text: 'อ่านSA', completed: true },
        { id: 5, text: 'สรุปSA', completed: true },
        { id: 6, text: 'ฝึกทำDBA', completed: false },
        { id: 7, text: 'อ่านBIS', completed: false }
    ];
    
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3>รายการที่ต้องทำ</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#ffffffff',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#3f3a3aff',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #978d87ff',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#c4b9b9ff' : '#fff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#3f3a3aff' : '#cec5c5ff'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: '#3f3a3aff',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;
