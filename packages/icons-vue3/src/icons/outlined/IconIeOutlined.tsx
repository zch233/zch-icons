// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IeOutlinedSvg from 'icons-base/es/asn/IeOutlined';

export interface IeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconIeOutlined: IeOutlinedIconType = (props, context) => <Icon name='IeOutlined' {...{ ...props, ...context.attrs }} icon={IeOutlinedSvg} />;

IconIeOutlined.displayName = 'IconIeOutlined';
IconIeOutlined.theme = 'outlined';
IconIeOutlined.originName = 'ie';

export default IconIeOutlined;
