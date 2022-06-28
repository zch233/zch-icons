// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DatabaseFilledSvg from 'gupo-icons-base/es/asn/DatabaseFilled';

export interface DatabaseFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDatabaseFilled: DatabaseFilledIconType = (props, context) => (
    <Icon name='DatabaseFilled' {...{ ...props, ...context.attrs }} icon={DatabaseFilledSvg} />
);

IconDatabaseFilled.displayName = 'IconDatabaseFilled';
IconDatabaseFilled.theme = 'filled';
IconDatabaseFilled.originName = 'database';

export default IconDatabaseFilled;
