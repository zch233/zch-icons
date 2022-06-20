// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HeartOutlinedSvg from 'icon-base/es/asn/HeartOutlined';

export interface HeartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHeartOutlined: HeartOutlinedIconType = (props, context) => <Icon name='HeartOutlined' {...{ ...props, ...context.attrs }} icon={HeartOutlinedSvg} />;

IconHeartOutlined.displayName = 'IconHeartOutlined';

export default IconHeartOutlined;
