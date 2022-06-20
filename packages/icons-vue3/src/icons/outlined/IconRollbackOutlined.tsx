// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RollbackOutlinedSvg from 'icon-base/es/asn/RollbackOutlined';

export interface RollbackOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRollbackOutlined: RollbackOutlinedIconType = (props, context) => (
    <Icon name='RollbackOutlined' {...{ ...props, ...context.attrs }} icon={RollbackOutlinedSvg} />
);

IconRollbackOutlined.displayName = 'IconRollbackOutlined';

export default IconRollbackOutlined;
