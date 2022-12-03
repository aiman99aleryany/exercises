import React, { useMemo } from 'react';

const isAdult = (users) => {
    return users.filter((user) => user.age > 18);
};

const renderFilterdUsers = (users) => {
    return users.map((user, i) => {
        return (
            <div key={i}>
                <strong>id: {user.id}, name: {user.name}, age: {user.age}</strong>

            </div>
        );
    });
};

const FilteredList = ({users}) => {
    const filteredUsers = useMemo(() => isAdult(users), [users]);
    const usersToBeRendered = useMemo(() => renderFilterdUsers(filteredUsers), [filteredUsers]);

    return <div>{usersToBeRendered}</div>;
};

export default FilteredList;
