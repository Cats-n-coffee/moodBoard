interface SidebarProps {
    addCard: () => void,
}

const Sidebar : React.FC<SidebarProps> = ({ addCard }) => {
    return <div className="sidebar-wrapper">
        <button onClick={addCard}>+</button>
    </div>
}

export default Sidebar;