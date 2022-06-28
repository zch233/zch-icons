// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AndroidOutlinedSvg from 'gupo-icons-base/es/asn/AndroidOutlined';

export interface AndroidOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAndroidOutlined: AndroidOutlinedIconType = (props, context) => (
    <Icon name='AndroidOutlined' {...{ ...props, ...context.attrs }} icon={AndroidOutlinedSvg} />
);

IconAndroidOutlined.displayName = 'IconAndroidOutlined';
IconAndroidOutlined.theme = 'outlined';
IconAndroidOutlined.originName = 'android';

export default IconAndroidOutlined;
