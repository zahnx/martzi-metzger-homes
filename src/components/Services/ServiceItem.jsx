import styles from "./Services.module.css";

function ServiceItem({ title, icon, description }) {
  return (
    <div className="col-12 col-lg-4 service-item">
      <i className={`${styles.serviceIcon} ${icon}`}></i>
      <h3> {title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;
