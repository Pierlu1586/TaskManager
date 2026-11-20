function StatusBadge({status}){

    function getStatusLabel(status) {
    switch (status) {
      case "todo":
        return "Da fare";
      case "pending":
        return "In corso";
      case "completed":
        return "Completata";
      default:
        return "Stato non riconosciuto.";
    }
  }

    return(
        <span className="statusBadge">
                {getStatusLabel(status)}
        </span>
    )
}

export default StatusBadge