
import useLocalStorage from './useLocalStorage'
import './script.css'

// export default function LightAndDark(){
//  const [isDark ,setIsDark]=useState(false)


//  function handleDark(){
//     setIsDark(!isDark)
//  }

//  return (
//     <div className={isDark? 'dark-mode':'light-mode'}>
//         <div>
//             <button onClick={handleDark}>OnDarkMOde</button>
//         </div>

//         yoo
//     </div>
//  )

// }


export default function LightAndDark() {
    const [theme, setTheme] = useLocalStorage("theme", "dark");
  
    function handleToggleTheme() {
      setTheme(theme === "light" ? "dark" : "light");
    }
  
    console.log(theme);
  
    return (
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Wellcome Kaka !</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    );
  }