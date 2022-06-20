// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AndroidOutlinedSvg from 'icon-base/es/asn/AndroidOutlined';

export interface AndroidOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAndroidOutlined: AndroidOutlinedIconType = (props, context) => (
    <Icon name='AndroidOutlined' {...{ ...props, ...context.attrs }} icon={AndroidOutlinedSvg} />
);

IconAndroidOutlined.displayName = 'IconAndroidOutlined';

export default IconAndroidOutlined;
