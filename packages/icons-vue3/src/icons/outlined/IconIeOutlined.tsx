// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IeOutlinedSvg from 'icon-base/es/asn/IeOutlined';

export interface IeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconIeOutlined: IeOutlinedIconType = (props, context) => <Icon name='IeOutlined' {...{ ...props, ...context.attrs }} icon={IeOutlinedSvg} />;

IconIeOutlined.displayName = 'IconIeOutlined';

export default IconIeOutlined;
