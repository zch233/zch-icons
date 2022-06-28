// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IdcardOutlinedSvg from 'gupo-icons-base/es/asn/IdcardOutlined';

export interface IdcardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconIdcardOutlined: IdcardOutlinedIconType = (props, context) => (
    <Icon name='IdcardOutlined' {...{ ...props, ...context.attrs }} icon={IdcardOutlinedSvg} />
);

IconIdcardOutlined.displayName = 'IconIdcardOutlined';
IconIdcardOutlined.theme = 'outlined';
IconIdcardOutlined.originName = 'idcard';

export default IconIdcardOutlined;
