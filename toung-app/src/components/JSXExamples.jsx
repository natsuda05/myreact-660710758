import React from 'react';

// === JSX Examples - มาดูตัวอย่างการใช้ JSX กัน ===

function JSXExamples() {
    // 1. JSX พื้นฐาน - เหมือน HTML แต่อยู่ใน JavaScript
    const greeting = <h1>Hello, React with JSX!</h1>;
    
    // 2. ใช้ JavaScript Variables ใน JSX
    const name = 'สมชาย';
    const age = 25;
    
    // 3. JavaScript Expressions ใน JSX (ใส่ใน {})
    const currentYear = new Date().getFullYear();
    
    // 4. เตรียมข้อมูลสำหรับ render
    const user = {
        firstName: 'สมหญิง',
        lastName: 'ใจดี',
        age: 22,
        hobbies: ['อ่านหนังสือ', 'ฟังเพลง', 'เขียนโค้ด']
    };
    
    // 5. Function ที่ return JSX
    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };
    
    // 6. Conditional Rendering
    const isLoggedIn = true;
    const hasNotification = 3;
    
    return (
        <div className="jsx-examples">
            <h1>ตัวอย่างการใช้ JSX</h1>
            
            {/* === 1. การแสดงผลข้อมูลพื้นฐาน === */}
            <section>
                <h2>📝 การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>ปีนี้คือปี {currentYear}</p>
                <p>ชื่อเต็ม: {formatName(user)}</p>
            </section>
            
            {/* === 2. การใช้ Attributes === */}
            <section>
                <h2>🎨 Attributes ใน JSX</h2>
                {/* ใช้ className แทน class */}
                <div className="card">
                    <p className="text-primary">ใช้ className แทน class</p>
                </div>
                
                {/* camelCase attributes */}
                <button 
                    onClick={() => alert('คลิกแล้ว!')}
                    onMouseEnter={() => console.log('เมาส์เข้า')}
                >
                    Hover หรือ Click ดู
                </button>
                
                {/* style attribute รับ object */}
                <div style={{
                    backgroundColor: '#E8F5E8',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
                    </p>
                </div>
            </section>
            
            {/* === 3. Conditional Rendering === */}
            <section>
                <h2>🔀 Conditional Rendering</h2>
                
                {/* ใช้ ternary operator */}
                <p>
                    สถานะ: {isLoggedIn ? '✅ ล็อกอินแล้ว' : '❌ ยังไม่ได้ล็อกอิน'}
                </p>
                
                {/* ใช้ && operator */}
                {hasNotification > 0 && (
                    <div className="notification">
                        🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
                    </div>
                )}
                
                {/* ใช้ if-else ผ่าน function */}
                {(() => {
                    if (user.age >= 18) {
                        return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                    } else {
                        return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
                    }
                })()}
            </section>
            
        </div>
    );
}

export default JSXExamples;