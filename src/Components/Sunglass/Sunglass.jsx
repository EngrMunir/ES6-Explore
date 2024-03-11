
// import add from '../Util/calculate';
import { add, divided, multiply } from '../Util/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css';

const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const mul = multiply(first, second);
    const vaag = divided(first, second)

    console.log(sum);
    console.log(mul);
    console.log(vaag);
    return (
        <div>
            <h2>This is sunglass page</h2>
        </div>
    );
};

export default Sunglass;