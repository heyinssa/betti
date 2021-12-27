import { TesterServiceRow, TitleBar } from '../../components';
import TesterProfileContainer from '../../components/TesterProfileContainer';
import './TesterProfilePage.scss';
import { ServiceType } from '../../modules/User';

const TesterProfilePage = () => {
  var serviceData: ServiceType = {
    projectName: 'ft_betti',
    projectImage: 'https://avatars.githubusercontent.com/u/37893979?v=4',
    teamName: 'haeinsa',
    teamImage: 'https://avatars.githubusercontent.com/u/95202825?s=200&v=4',
    teammates: [
      {
        name: 'suhshin',
        profileImage:
          'https://emoji.slack-edge.com/T039P7U66/42s-gon/58daa523abb65d9b.png',
      },
      {
        name: 'ycha',
        profileImage:
          'https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f36a@2x.png',
      },
      {
        name: 'sham',
        profileImage:
          'https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f9f4@2x.png',
      },
      {
        name: 'jiychoi',
        profileImage:
          'https://emoji.slack-edge.com/T039P7U66/think/362152fedad0adff.png',
      },
    ],
    favourites: 123,
    description: '안녕하세요 반갑습니다..',
    descriptionDetail:
      '안녕하세요 안녕하세요\n안녕하세요 안녕하세요 안녕하세요 안녕하세요 \n안녕하세요 안녕하세요 안녕하세요 안녕하세요\n뭐적지 반갑습니다\n행복한 크리스마스 즐거운 연말되세요',
    link: '/use/test1',
    detailImage: [
      'https://mblogthumb-phinf.pstatic.net/20151116_240/tnwlsss_1447661327738hWrCX_JPEG/DSC_0383.JPG?type=w2',
      'https://t1.daumcdn.net/cfile/tistory/2307023A519229FE07',
      'https://recipe1.ezmember.co.kr/cache/recipe/2015/06/01/0467fec40dc5df750f026e7a87b4b1261.jpg',
      'https://contents.lotteon.com/itemimage/_v153515/LO/14/71/81/05/45/_1/47/18/10/54/6/LO1471810545_1471810546_1.jpg/dims/optimize/dims/resizemc/400x400',
      'http://image.auction.co.kr/itemimage/1c/80/bf/1c80bf1dd6.jpg',
    ],
  };
  return (
    <div className="tester-body">
      <TitleBar />
      <div className="tester-profile-page">
        <div className="tester-profile-services">
          <TesterServiceRow serviceData={serviceData} ifFeedback={true} />
          <TesterServiceRow serviceData={serviceData} ifFeedback={true} />
          <TesterServiceRow serviceData={serviceData} ifFeedback={true} />
        </div>
        <TesterProfileContainer />
      </div>
    </div>
  );
};

export default TesterProfilePage;
