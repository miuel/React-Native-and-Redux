import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
    return(
        <Router>    
            <Scene key="root">
                    <Scene key="login" component={LoginForm} hideNavBar />
                    
                    <Scene 
                    //initial
                        hideNavBar={false}
                        key="employeeList" 
                        component={EmployeeList}                                                           
                        //con renderBackButton pasandole un objeto vacio escondo el boton back 
                        renderBackButton={()=>{}}                       
                        navigationBarStyle={{ backgroundColor: "#e74c3c", borderBottomColor:"#e74c3c" }}
                        title="Employees" 
                        // estilos al titulo (Employees)
                        titleStyle={{ color: 'white', fontSize: 20, fontWeight: '700', textShadowColor: 'rgba(255, 255, 255, 1.0)' }}
                        // añado el boton a la derecha
                        
                        rightTitle="Add"
                        rightButtonTextStyle={{ color: 'white', fontWeight: '700' }}
                        // al hacer press onRight Add accedo a EmployeeCreate Scene 
                        onRight={() => Actions.employeeCreate()}
                        
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                        
                        navigationBarStyle={{ backgroundColor: "#2c3e50", borderBottomColor:"#2c3e50" }}
                        titleStyle={{ color: 'white', fontSize: 20, fontWeight: '700', textShadowColor: 'rgba(255, 255, 255, 1.0)' }}
                        leftButtonIconStyle={{ tintColor: 'white' }}
                    /> 
                    <Scene 
                        key="employeeEdit"
                        component={EmployeeEdit}
                        navigationBarStyle={{ backgroundColor: "#d35400", borderBottomColor:"#d35400" }}
                        
                        title="Edit Employee"
                        titleStyle={{ color: 'white', fontSize: 20, fontWeight: '700', textShadowColor: 'rgba(255, 255, 255, 1.0)' }}
                        leftButtonIconStyle={{ tintColor: 'white' }}
                    />
            </Scene>
        </Router>
    )
}

export default RouterComponent;