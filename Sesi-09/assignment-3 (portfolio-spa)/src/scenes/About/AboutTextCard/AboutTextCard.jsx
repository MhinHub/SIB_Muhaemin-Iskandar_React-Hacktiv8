import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Muhaemin Iskandar </span>
        from <span className={s.purple}> Makassar, South Sulawesi</span>
        <br />
        Skilled MERN Stack and React Native Developer.
        <br /> Bachelor in Industrial Engineering from
        <br />
        University of Hasanuddin
        <br />
      </p>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
