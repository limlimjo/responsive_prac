import CommonButton from "@/components/common/button/CommonButton";
import $icon_rocketLaunch from "@/assets/icons/icon_rocketLaunch.svg";

const index = () => {
  return (
    <div>
      <p>메인 홈페이지 파일입니다.</p>
      <CommonButton 
        label="Button"
        size="large"
        variant="outlined"
        icon={$icon_rocketLaunch}
        onClick={() => alert("test")}
      />
    </div>
  );
}

export default index;