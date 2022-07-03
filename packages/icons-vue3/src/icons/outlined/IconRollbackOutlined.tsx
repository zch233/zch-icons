// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RollbackOutlinedSvg from 'icons-base/es/asn/RollbackOutlined';

export interface RollbackOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRollbackOutlined: RollbackOutlinedIconType = (props, context) => (
    <Icon name='RollbackOutlined' {...{ ...props, ...context.attrs }} icon={RollbackOutlinedSvg} />
);

IconRollbackOutlined.displayName = 'IconRollbackOutlined';
IconRollbackOutlined.theme = 'outlined';
IconRollbackOutlined.originName = 'rollback';

export default IconRollbackOutlined;
