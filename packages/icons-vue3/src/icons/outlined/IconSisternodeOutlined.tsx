// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SisternodeOutlinedSvg from 'icon-base/es/asn/SisternodeOutlined';

export interface SisternodeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSisternodeOutlined: SisternodeOutlinedIconType = (props, context) => (
    <Icon name='SisternodeOutlined' {...{ ...props, ...context.attrs }} icon={SisternodeOutlinedSvg} />
);

IconSisternodeOutlined.displayName = 'IconSisternodeOutlined';

export default IconSisternodeOutlined;
