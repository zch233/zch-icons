// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DingdingOutlinedSvg from 'icons-base/es/asn/DingdingOutlined';

export interface DingdingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDingdingOutlined: DingdingOutlinedIconType = (props, context) => (
    <Icon name='DingdingOutlined' {...{ ...props, ...context.attrs }} icon={DingdingOutlinedSvg} />
);

IconDingdingOutlined.displayName = 'IconDingdingOutlined';
IconDingdingOutlined.theme = 'outlined';
IconDingdingOutlined.originName = 'dingding';

export default IconDingdingOutlined;
