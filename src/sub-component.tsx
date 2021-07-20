import * as React from 'react';

// Propsの型定義
type Props = {
    name: string,
};

export const SubComponent = (props: Props) => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        console.log('クリックされました');
        setCount(count + 1);
    };

    return (
        <div>
            <h2>{props.name}</h2>
            <div>{count}</div>
            <button onClick={handleClick}>Add +1 +unko</button>
            <div className="alert alert-primary m-5" role="alert">
                A simple primary alert—check it out!
            </div>
        </div>
    );
}
