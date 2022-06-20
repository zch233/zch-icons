// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IdcardOutlinedSvg from 'icon-base/es/asn/IdcardOutlined';

export interface IdcardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconIdcardOutlined: IdcardOutlinedIconType = (props, context) => (
    <Icon name='IdcardOutlined' {...{ ...props, ...context.attrs }} icon={IdcardOutlinedSvg} />
);

IconIdcardOutlined.displayName = 'IconIdcardOutlined';

export default IconIdcardOutlined;
