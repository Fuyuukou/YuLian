import PropTypes from 'prop-types';
//输入验证
const Greeting = (props)=>{
    return <h1>Hello,{props.name}!</h1>
};
Greeting.propTypes = {
    name: PropTypes.string.isRequired
};
function GreetYou(){
    return (
        <div>
            <Greeting name="Forever"/>
        </div>
    )
}
export default GreetYou;