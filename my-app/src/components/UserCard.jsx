import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://i.pinimg.com/736x/8b/ae/c6/8baec6af80ac24ababf9477baca83aba.jpg" 
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #000000ff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#3f3a3aff', margin: '10px 0' }}>
        NATSUDA KANYABOON
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        นักพัฒนา React มือใหม่ที่กำลังเรียนรู้
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #000000ff',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#ffffffff',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;